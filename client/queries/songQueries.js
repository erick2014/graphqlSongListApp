import gql from 'graphql-tag'

export const getSongs = gql`
{
 songs{
  id
  title
  lyrics{
   content
   id
  }
 }   
}
`

export const getSong = gql`
    query getSong($id:ID!){
        song(id:$id){
            id
            title
            lyrics {
                id
                content
                likes
            }
        }
    }
`

export const deleteSong = gql`
    mutation DeleteSong($id:ID){
        deleteSong(id:$id){
            id
        }
}
`

export const createSong = gql`
    mutation AddSong($title:String){
        addSong(title:$title){
            id
            title
        }
}
`

export const addLyricToSong = gql`
 mutation AddLyricToSong($content:String,$songId:ID){
  addLyricToSong(content:$content,songId:$songId){
   id
   title
   lyrics{
    id
    content
    likes
  }
 }
}
`

export const likeLyric = gql`
 mutation LikeLyric($id:ID){
  likeLyric(id:$id){
   id
   likes
 }
}
`