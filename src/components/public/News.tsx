import { useEffect, useState } from "react"

// Component
import { getData } from "../../config/api"
import { articleAPIKey, articleURL } from "../../config/const"
import { toShortText } from "../../config/convert"
import Image from "../Image"

interface IProps{
  config: any,
  setConfig: (e:any) => void,
  setArticleDetail: (e:any) => void
}

const News = (props: IProps) => {
  const {config, setConfig, setArticleDetail} = props
  const [articleNews, setArticleNews] = useState<any>()

  useEffect(() => {
    getData(articleURL, {
      page: 1,
      pageSize: 5,
      country: 'id',
      apiKey: articleAPIKey
    }).then((response:any) => {
      setArticleNews(response.data)
    })
  }, [])

  return(
    <div className="article-news">
      <h1>Berita Terbaru</h1>
      {articleNews?.articles?.map((article: any, index: number) => (
        <div
        key={index}
          className="row"
          onClick={() => {
            setArticleDetail(article)
            setConfig({...config, show: 'detail'})
          }}
        >
          <div className="col-md-3">
            <Image src={article?.urlToImage} alt={article?.title} />
          </div>
          <div className="col-md-9">
            <p>{toShortText(article?.title)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default News