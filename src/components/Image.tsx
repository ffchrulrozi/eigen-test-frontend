interface Iprops {
  src?: string,
  alt?: string,
  onError?: string
  style?: any
}

const Image = (props: Iprops) => {
  const {
    src = '/assets/noimage.png',
    alt = 'berita satu indonesia satu',
    onError = '/assets/noimage.png'
  } = props

  return(
    <img
      src={src}
      alt={alt}
      loading='lazy'
      onError={(e:any)=> e.target.src = onError}
      style={{width: '100%'}}
    />
  )
}

export default Image;