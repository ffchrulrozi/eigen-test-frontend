import _ from 'lodash'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

interface IProps{
  page: number,
  pageSize: number,
  total: number,
  onPageChange: (page:number) => void
}

const MyPagination = (props:IProps) => {
  const {page, pageSize, total, onPageChange} = props
  const lastPage = Math.ceil(total / pageSize)

  return(
    <Pagination aria-label="paginasi">
      <PaginationItem disabled={page === 1 ? true : false} key={0}>
        <PaginationLink onClick={()=>onPageChange(1)}>
          Pertama
        </PaginationLink>
      </PaginationItem>

      {_.times(lastPage, (index)=>(
        <PaginationItem active={page === index+1 ? true : false} key={index+1}>
          <PaginationLink onClick={() => onPageChange(index+1)}>
                {index+1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={page === lastPage ? true : false}>
        <PaginationLink onClick={()=>onPageChange(lastPage)} key={lastPage}>
          Terakhir
          </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

export default MyPagination