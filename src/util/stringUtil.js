export const mapKey = (obj = {}, fn = (key, value) => false || `new Key`) => {
    return Object.keys(obj).reduce((p, key, i, a) => {
        const result = fn(key, obj[key]);
        if (!result) return p;
        p[result] = obj[key];
        return p;
    }, {});
}
export const isCheckRulesForString = (regs = [], str = ``) => {
    return regs.some(reg => reg.test(str)) ? str : false;
}
export const rulesReplaceForString = (regAndExcs = [{reg:null,exc:null}], str = '') => {
    return regAndExcs.reduce((str, {reg,exc},) => { return str.replace(reg,exc) }, str)
}