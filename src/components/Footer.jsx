function Footer({title, setTitle}) {

    const switchTitle = () => {
        setTitle(title === 'Header Component' ? 'Footer Component' : 'Header Component')
    }

    return (
        <div>
            <button onClick={switchTitle}>Switch Title</button>
        </div>
    )
}

export default Footer;