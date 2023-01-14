function About(props){
    return(
        <>
        <aside>
            <img src={props.src} placeholder="https://via.placeholder.com/215"></img>
            <p>{props.about}</p>
        </aside>
        </>
    )
}

export default About