import styled from "@emotion/styled"
import Image from 'next/image'
import { useEffect, useState } from "react"
import AddVisited from "./AddVisited"

const MostVisitedComponent = styled.div({
  position: 'relative',
  width: '577px',
  height:'236px',
  overflow:'hidden',
  '& .container': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const MostVisitedItem = styled.a({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '112px',
  height: '112px',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(32, 33, 36, .1)',
    borderRadius: '4px',
  },
  '& .img-view': {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(241, 243, 244, 1)',
  },
  '& span': {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#202124',
  }
})

export type MostVisitedItem = {
  name: string,
  url: string,
  icon?: string
}
const MostVisitedDefaultItems: MostVisitedItem[] = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/',
    icon: 'https://www.youtube.com/favicon.ico'
  },
  {
    name: '百度一下',
    url: 'https://www.baidu.com/',
    icon: 'https://www.baidu.com/favicon.ico'
  },
]

export default function MostVisited() {
  const [MostVisitedItems, setMostVisitedItems] = useState(MostVisitedDefaultItems)
  useEffect(() => {
    const oldItems = localStorage.getItem('mostVisitedItems')
    if (oldItems) {
      setMostVisitedItems(JSON.parse(oldItems))
    } else {
      localStorage.setItem('mostVisitedItems', JSON.stringify(MostVisitedDefaultItems))
    }
  }, [])

  const addMostVisitedItem = (item: MostVisitedItem) => {
    const protocol = item.url.split('/')[0]
    item.icon = protocol + '//' + item.url.split('/')[2] + '/favicon.ico'
    const newItems = [...MostVisitedItems, item]
    setMostVisitedItems(newItems)
    localStorage.setItem('mostVisitedItems', JSON.stringify(newItems))
  }
  const [showAddVisited, setShowAddVisited] = useState(false)
  const handleAddVisitedCancel = () => {
    setShowAddVisited(false)
  }
  const handleAddVisited = () => {
    setShowAddVisited(true)
  }
  const handleAddVisitedOk = (item: MostVisitedItem) => {
    addMostVisitedItem(item)
    setShowAddVisited(false)
  }
  
  return (
    <MostVisitedComponent>
      <div className="container">
        {
          MostVisitedItems.map((item, index) => (
            <MostVisitedItem key={item.url} href={item.url}>
              <div className="img-view">
                <Image loader={({src}) => src} src={item.icon || ''} alt={item.name} width={24} height={24} unoptimized />
              </div>
              <span>{item.name}</span>
            </MostVisitedItem>
          ))
        }
        <MostVisitedItem onClick={handleAddVisited} key={1}>
          <div className="img-view">
            <Image src="/add.svg" alt="添加" width={24} height={24} />
          </div>
          <span>添加快捷方式</span>
        </MostVisitedItem>
      </div>
      <AddVisited isOpen={showAddVisited} onClose={handleAddVisitedCancel} onSubmit={handleAddVisitedOk} />
    </MostVisitedComponent>
  )
}
