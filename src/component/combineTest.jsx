import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addDataOneAction, addDataTwoAction } from '../store/combine';
function CombineTest({ combine, bindAddDataOneAction, bindAddDataTwoAction }) {
  const [input, setInput] = useState('');
  const onInputChange = useCallback((e) => {
    setInput(v => e.target.value);
  }, []);
  useEffect(() => {
    console.log(combine);
  }, [combine]);
  return (
    <>
      <div>combinTest</div>
      <div>one:{combine.one}<span style={{ display: "inline-block", width: "5em" }}></span>
        <button onClick={e => bindAddDataOneAction(input)}>提交</button></div>
      <div>two:{combine.two}<span style={{ display: "inline-block", width: "5em" }}></span>
        <button onClick={e => bindAddDataTwoAction(input)}>提交</button></div>
      <input value={input} onChange={onInputChange} /><br />
    </>
  )
}
function mapPropsToState(state, ownProps) {
  return {
    ...ownProps,
    combine: state.combine
  }
}
function dispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    bindAddDataOneAction: props => dispatch(addDataOneAction(props)),
    bindAddDataTwoAction: props => dispatch(addDataTwoAction(props)),
  }
}
export default connect(mapPropsToState, dispatchToProps)(CombineTest);
