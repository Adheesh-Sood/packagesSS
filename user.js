
function App(){
    function alert() {
        window.alert('clicked')
    }

    return(
        <>
            <button onClick={alert}>click me</button>



        </>
    )
}

var a=document.getElementById('my div')
ReactDOM.render(<App />, document.getElementById('my div'))