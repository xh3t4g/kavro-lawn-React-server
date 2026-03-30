export function Card({image}) {
    return (
        <a onClick={() => window.open(image.img, '_blank')}>
            <img src={image.img} alt="" />
        </a>
    );
}
