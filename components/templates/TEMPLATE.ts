// (1) import層
import React from 'react'
// import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = {} & ContainerProps

// (3) DOM層
export const Component: React.FC<Props> = props => ()

// (4) Style層
// const StyledComponent = styled(Component)``

// (5) Container層
// export const Container: React.FC<ContainerProps> = props => {
//   return <StyledComponent {...props} />
// }
