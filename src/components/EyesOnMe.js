// Code EyesOnMe Component Here
function EyesOnME (){
    function handleFocus(){
        console.log("Good!")
    }

    function handleBlur(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <button value ="Eyes on me" onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )

}
 export default EyesOnME