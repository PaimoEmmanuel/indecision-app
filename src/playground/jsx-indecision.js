console.log('App.js is running');
// JSX - JavaScript XML
const app = {
    title: "JAckie chan",
    subTitile: "Jaet li",
    options: []
}
//app.options =  ['one', 'two'];

const onFormSubmit = (e) => {
e.preventDefault();
const option = e.target.elements.option.value;
if (option){
    app.options.push(option);
    e.target.elements.option.value = '';
    whatShallIRender()
}
}
const removeAll = () =>{
app.options = [];
whatShallIRender()
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById("app");

const whatShallIRender = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitile && <p>{app.subTitile}</p>}
            <p>{app.options && (app.options.length > 0) ?"Here are your options":"Option no dey o bro"}</p>
            <button disabled = {app.options.length == 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick = {removeAll}>Remove all</button>
            <ol>
            {
                app.options.map((item) => <li key = {item}>{item}</li>)
            }
            </ol>
            <form onSubmit = {onFormSubmit}>
            <input type='text' name="option"/>
            <button>Add option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
}
whatShallIRender();
/*let details = '';
const toggleVisibility = () => {
    if(details){
        details = '';
    }else{
        details = <p>This are the details, This are the details, This are the details</p>

    } render();
}
const render = () => {
    const templateThree = (
    <div>
    <h1> Visibility toggle</h1>
    <button onClick = {toggleVisibility}>{details? 'Hide details': 'Show details'}</button>
    {details}
    </div>
)
ReactDOM.render(templateThree, appRoot);
}; render()*/

// class IndecisionApp extends React.Component {
//     render() {
//         const subTitle = 'Put your life in the hands and a computer'
//         let options = ['Opt-one', 'opt-two', 'opt-three']
//         return (
//             <div>
//                 <Header title='Indecision App' subTitle = {subTitle}/>
//                 <Action/>
//                 <Options options ={options}/>
//                 <AddOption />
//             </div>
//         )
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

// class Action extends React.Component {
//     render() {
//         return <div><button>What should I do?</button></div>
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <ol>
//                 <p>{this.props.options.length}</p>
//             </ol>
//         )
//     }
// }

// class Option extends React.Component {
//     render() {
//         return <li>Johnny</li>
//     }
// }

// class AddOption extends React.Component {
//     render() {
//         return (
//             <form>
//                 <input />
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'))