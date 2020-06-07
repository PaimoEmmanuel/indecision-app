class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
            if(!isNaN(count)){
                this.setState(() => ({
                count
            }))
        }
        } catch(e){
            //Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }
        
    }
    
    handleAddOne(){
        this.setState((prevState) => ({count: prevState.count +1}))
    }
    handleMinusOne(){
        this.setState((prevState) => ({count: prevState.count -1}))
    }
    handleReset(){
        this.setState( () => {
            return{
                count: 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>RESET</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0
}
 ReactDOM.render(<Counter/>, document.getElementById('app'))


// let count = 0;
// const addOne = () =>{
//     count++;
//     whatShallIRender();
// }
// const minusOne = () => {
//     count--;
//     whatShallIRender();
// }
// const reset = () => {
//     count = 0;
//     whatShallIRender();
//     }


// const whatShallIRender = () =>{
//     const templateTwo = (
//         <div><h3>Count: {count}</h3>
//         <button onClick= {addOne}>+1</button>
//         <button onClick = {minusOne}>-1</button>
//         <button onClick = {reset}>RESET</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);

// }
// whatShallIRender();
