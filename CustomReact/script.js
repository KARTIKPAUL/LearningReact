function customRender(reactElement,mainContainer){

    //First Approach

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("target",reactElement.props.target);
    // mainContainer.appendChild(domElement);

    //Another Approach

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);

}
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click Me To Go Google"
}

const mainContainer = document.getElementById("root");

customRender(reactElement , mainContainer);