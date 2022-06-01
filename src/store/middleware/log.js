export const logger=store=>next=>action=>{
    console.group(action.type)
    console.info(`dispatch`,action);
    //next is a changed dispatch
    let result=next(store);
    console.log(`next state`,store.getState());
    console.groupEnd(action.type);
    return result;
};
export const crashReporter=store=>next=>action=>{
    try {
        let result=next(store);
        return result;
    } catch (error) {
        console.log(error,{
            extra:{
                action,
                state:store.getState(),
            }
        });
    }
}
export const timeScheduler=store=>next=>action=>{
    if(!action?.meta?.delay){
        return next(action)
    }
    let timeId=setTimeout(()=>next(action),action.meta.delay);
    return function cancel(){
        clearTimeout(timeId);
    }
}
export const refScheduler=store=>next=>{
    let queueActions=[];
    let frame=[];
    function loop(){
        frame=null;
        try {
                if(queueActions.length){
                    next(queueActions.shift());
                }
        } catch (error) {
            maybeRef();
        }
    }
    function maybeRef(){
        if(queueActions.length&&!frame){
            frame=requestAnimationFrame(loop);
        }
    }
    return action=>{
        if(!action?.meta?.delay){
            return next(action);
        }
        queueActions.push(action);
        maybeRef();
        return function cancel(){
            queueActions=queueActions.filter(a=>a!==action)
        }
    }
}
export const vanillaPrommise=store=>next=>action=>{
    if(typeof action!=="function"){
        return next(action);
    }
    return Promise.resolve(action).then(store.dispatch);
}
export const readyStatePromise=store=>next=>action=>{
    if(!action.promise){
        return next(action);
    }
    function makeAction(ready,data){
        let newAction={...action,ready,...data};
        delete newAction.promise;
        return newAction;
    }
    next(makeAction(false));
    return action.promise.then(
        result=>next(makeAction(true,{result})),
        error=>next(makeAction(false,{error}))

    )
}
export const thunk=store=>next=>action=>typeof action==="function"?action(store.dispatch,store.dispatch):next(action);