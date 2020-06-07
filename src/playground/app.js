class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOption =  this.addOption.bind(this);
        this.deleteOption =  this.deleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({
                options
            }))
        }
        } catch(e){
            //Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        
    }
    removeAll(){
        this.setState(() => ({options: []}))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option);
    }
    deleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    addOption(option){

        if(!option){
            return "Enter a valid option"
        }
        else if(this.state.options.indexOf(option) > -1){
            return "option already exists"
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        //console.log(option)
    }
    render() {
        const title = 'This is from header';
        const subTitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title = {title} subTitle = {subTitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}    
                />
                <Options 
                    options = {this.state.options}
                    removeAll = {this.removeAll}
                    deleteOption = {this.deleteOption}
                />
                <AddOption 
                    addOption = {this.addOption}
                />
            </div>
        );
    }
}


const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
        </div>
    )
}

const Action = (props) =>{
    return (
        <div>
            <button
            onClick = {props.handlePick}
            disabled = {!props.hasOptions}
            >What should I do?</button>
        </div>
    );
}

const Options = (props) =>{
    return (
        <div>
            <ul>
                {props.options.map((option) =>( 
                    <Option key = {option} 
                        optionText = {option}
                        deleteOption = {props.deleteOption}
                    />
                    ))}
                    {props.options.length === 0 && <p>Please add an option to get started!</p>}
                <button onClick = {props.removeAll}>Remove all</button>
            </ul>
        </div>
    );
}


const Option = (props) =>{
    return (
        <div>
        <li>{props.optionText}</li>
        <button onClick={(e) => {
            props.deleteOption(props.optionText)
        }}>Delete me</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.addOption =  this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    addOption(e){
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const ERROR = this.props.addOption(option)
        
        this.setState(() => ({error: ERROR}))
        if(!ERROR){
            e.target.elements.option.value = ''
        }
        
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.addOption}>
                    <input type = "text" name = "option"></input>
                    <button>Add Option</button>
                </form>
            </div>
            )
    }
}


ReactDOM.render(<IndecisionApp options={["Gongo", "Robo"]}/>, document.getElementById('app'))