export default function VantagensComponent(props) {
    const estilo = {
        minWidth: props.largura,
        minHeight: props.altura,
        boxShadow: "0 .5rem 1rem #A2B3BF",
        borderRadius: "4.9rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem"
    };

    const estiloFoto = {
        flexDirection: "column",
    }

    const estiloTitulo = {
        fontSize: "2.6rem",
        fontFamily: "Prata, sans-serif",
        color: "#F74B35",
        fontWeight: "400",
        padding: "1.5rem 0",
        textAlign: "center"
    }

    const estiloTexto = {
        fontSize: "2rem",
        color: "#F74B35",
        paddingBottom: "1.5rem"
    }


    return (
        <div style={estilo}>
            <img src={props.img} alt={props.alt} style={estiloFoto} />
            <h3 style={estiloTitulo}>{props.titulo}</h3>
            <p style={estiloTexto}>{props.texto}</p>
        </div>
    )
}