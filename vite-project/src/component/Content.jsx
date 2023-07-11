
const buttonClick = () => {
    const textarea = document.getElementById('myTextarea');
    const button = document.getElementById('btn');
    let para = document.createElement("p");
    para.innerHTML = textarea.value;
    button.appendChild(para);

  };


const Content = () =>{
    return(
        <div>
        <textarea id="myTextarea" rows="4" cols="50" placeholder="Write Something Here"/><br />
        <button onClick={buttonClick}>Display Text</button>
        <div id="btn"></div>
      </div>
    )
}

export default Content;