import gql from 'graphql-tag'

export const getSongs = gql`
{
 songs{
  id
  title
  lyrics{
   content
   likes
  }
 }   
}
`