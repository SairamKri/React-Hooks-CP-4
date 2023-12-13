import {useState} from 'react'

import {
  MainContainer,
  MainHeading,
  TagLine,
  ReactHookImage,
  ImageDescription,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isFullTest, setText] = useState(false)

  //   const ImageContent = `Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered
  //                             over five years of writing and maintaining tens of thousands of components.For curious readers,
  //                             we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your
  //                             component hierarchy.Hooks work side-by-side with existing code so you can adopt them gradually.`

  const Description = isFullTest
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = isFullTest ? 'Read Less' : 'Read More'

  const onClickTheButton = () => setText(prevState => !prevState)

  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <TagLine>Hooks are a new addition to React</TagLine>
      <ReactHookImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ImageDescription>{Description}</ImageDescription>
      <ReadMoreButton type="button" onClick={onClickTheButton}>
        {buttonText}
      </ReadMoreButton>
    </MainContainer>
  )
}

export default ReadMore
