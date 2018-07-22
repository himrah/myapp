import React from 'react';
import { Text } from 'react-native';

/*export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}*/
/*
export const BlK=()=>{
  
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'arial' }]} />;
  
}
export const MonoText = ()=>{
  return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
}*/

export class BK extends React.Component{
  render(){
    return(
      <Text {...this.props} style={[this.props.style, { fontFamily: 'blkchcry' }]} />
    )
  }
}

export class MonoText extends React.Component{
  render(){
    return(
      <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />
    )
  }
}