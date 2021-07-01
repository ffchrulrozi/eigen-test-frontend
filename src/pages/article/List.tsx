import { config } from "process"
import Image from "../../components/Image"
import MyPagination from "../../components/MyPagination"
import { toDate, toShortText } from "../../config/convert"

interface IProps {
  articles: any,
  articleParam: any,
  setArticleParam: (e:any) => void,
  setArticleDetail: (e:any) => void,
  config: (e:any) => void,
  setConfig: (e:any) => void
}

const List = (props: IProps) => {
  const { articles, articleParam, setArticleParam, setArticleDetail, setConfig } = props
  
  return(
    <>
      {articles?.articles?.map((article: any, index: number) => (
        <div
          key={index}
          className="article-list"
          onClick={() => {
            setArticleDetail(article)
            setConfig({...config, show: 'detail'})
          }}
        >
          <div className="row">
            <div className="col-md-3">
              <Image src={article?.urlToImage} alt={article?.title} />
            </div>
            <div className="col-md-9">
              <h1>{article?.title}</h1>
              <h2>@{article?.source?.name} {toDate(article?.publishedAt)}</h2>
              <p>{toShortText(article?.content, 150)}</p>
            </div>
          </div>
        </div>
      ))}

      <MyPagination
        page={articleParam?.page}
        pageSize={articleParam?.pageSize}
        total={articles?.totalResults}
        onPageChange={(e:number)=>setArticleParam({...articleParam, page: e})}
      />
    </>
  )
}

export default List