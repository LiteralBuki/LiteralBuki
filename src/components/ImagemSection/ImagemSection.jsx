import styles from './ImagemSection.module.css';

function ImagemSection(props) {
    return (
        <div className= {styles.sectionImage}>
            <img src={props.foto} alt={props.alt} className= {styles.imagemSection} />
            <p>{ props.texto }</p>
        </div>
    )
}

export default ImagemSection;