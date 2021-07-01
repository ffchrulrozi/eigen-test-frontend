import { useEffect, useState } from "react"
import { Spinner } from 'reactstrap'

// Components
import News from "../../components/public/News"

// Config
import { articleAPIKey, articleURL } from "../../config/const"
import { getData } from "../../config/api"
import Detail from "./Detail"
import List from "./List"

const Article = () => {
  const [config, setConfig] = useState<any>({
    loading: false,
    show: 'list'
  })
  const [articleDetail, setArticleDetail] = useState<any>()
  const [articles, setArticles] = useState<any>()
  const [articleParam, setArticleParam] = useState<any>({
    page: 1,
    pageSize: 5,
    country: 'id',
    apiKey: articleAPIKey
  })

  useEffect(() => {
    setConfig({...config, loading:true})
    getData(articleURL, articleParam).then((response:any) => {
      setArticles(response.data)
      setConfig({...config, loading:false})
    })
    // eslint-disable-next-line
  }, [articleParam])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {config.show === 'list' ? (
            config.loading === true ? (
              <div className="d-flex justify-content-center">
                <Spinner
                  color="primary"
                  children=""
                  style={{ width: '5rem', height: '5rem' }}
                />
              </div>
            ) : (
              <List
                  articles={articles}
                  articleParam={articleParam}
                  config={config}
                  setArticleParam={e=>setArticleParam(e)}
                  setArticleDetail={e=>setArticleDetail(e)}
                  setConfig={e=>setConfig(e)}
              />
            )
          ) : config.show === 'detail' && (
            <Detail
              article={articleDetail}
              config={config}
              setConfig={e=>setConfig(e)}
            />
          )}
        </div>

        <div className="col-md-4">
          <News />
        </div>
      </div>
    </div>
  )
}

export default Article