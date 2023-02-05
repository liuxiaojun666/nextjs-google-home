import styled from '@emotion/styled'
import Image from 'next/image'

const SearchComponent = styled.div({
  position: 'relative',
  width: '561px',
  height:'44px',
  borderRadius: '22px',
  boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)',
  overflow:'hidden',
  marginTop: '16px',
  marginBottom: '16px',
  '& input': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    padding: '0 60px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '16px',
    lineHeight: '44px',
    color: '#202124',
    '&::placeholder': {
      color: '#757575'
    }
  },
  '& img': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    outline: 'none',
  }
})
export default function Search() {
  return (
    <SearchComponent>
      <Image src="/search.svg" alt="search" width={24} height={24} style={{left: 16}} />
      <input type="search" placeholder="在 Google 上搜索，或者输入一个网址"/>
      <Image src="/voice.svg" alt="voice" width={24} height={24} style={{right: 16}} />
    </SearchComponent>
  )
}
