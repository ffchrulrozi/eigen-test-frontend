import Image from "../../components/Image"
import { toDate } from "../../config/convert"

interface IProps {
  article: any
  config: any,
  setConfig: (e:any) => void
}

const Detail = (props: IProps) => {
  const { article, config, setConfig } = props
  
  return(
    <div className="article-detail">
      <a href='#!' onClick={()=>setConfig({...config, show: 'list'})}>
        Kembali
      </a>
      
      <Image
        src={article?.urlToImage}
        alt={article?.title}
        style={{ width:'100%' }}
      />

      <h1>{article?.title}</h1>
      <h2>Sumber: {article?.source?.name}</h2>
      <h3>Diposting oleh: {article?.author}, {toDate(article?.publishedAt)}</h3>

      <p>{article?.content}</p>
    </div>
  )
}

export default Detail