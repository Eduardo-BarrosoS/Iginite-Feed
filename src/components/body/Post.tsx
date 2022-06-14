import { Avatar } from '../Avatar'
import { Comment } from './Comment'

import { format, formatDistanceToNow } from 'date-fns'
import style from './Post.module.css' 
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'



interface Author {
    avatarUrl: string;
    name: string;
    rule: string;
}
interface Content {
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}




export function Post({ author, content, publishedAt }: PostProps) {
    // const commentDatePublished = new Date()
    // const formattedDate =  formatDistanceToNow(commentDatePublished, { addSuffix: true, locale: ptBR, includeSeconds: true })

    const dateFormatted =  format( publishedAt, " dd 'de' LLLL 'ás' hh:mmh", {
        locale: ptBR
    })

    const [newCommentText,  setNewCommentText] = useState('')
    const [comments, setComments] = useState([ "cadê o comentário?"])
    const [timeComment, setTimeCommnet] = useState('')  

    function handleCreatNewComment(event: FormEvent) {
        event.preventDefault()
        // handleTimeComment()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        
    }

    function handleCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('preencha este campo antes de publicar')
    }

    // function handleTimeComment(){
    //     const dateCommetn = new Date()
    //     const dateCommentFormated = formatDistanceToNow(dateCommetn, { addSuffix: true, locale: ptBR, includeSeconds: true })
    
    //     console.log(timeComment)
    //     setTimeCommnet(dateCommentFormated)
    // }    

    function deleteComment(commentToDelete: String) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentWithoutDeletedOne)
    }
    const isCommentEmpty = newCommentText.length === 0 

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl}  />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.rule}</span>      
                    </div>
                </div>
                <time dateTime='2022-06-11 14:14:00' title={dateFormatted}>
                { formatDistanceToNow(publishedAt, { 
                    addSuffix: true, 
                    locale: ptBR, 
                    includeSeconds: true 
                }) }
                </time>
            </header>
            <div className={style.content}>

                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content + '1'}>{line.content}</p>
                    }else if(line.type === 'link') {
                        return <p key={line.content + '2'}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreatNewComment} className={style.form} action="">
                <strong>Deixe um feedback</strong>
                <textarea 
                    name="newComment"
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleCommentInvalid}
                    required
                 
                 >

                </textarea>

                <footer> 
                    <button type="submit" disabled={isCommentEmpty}>
                        Publicar
                    </button> 
                </footer>
            </form>
            
            <div className={ style.commentList}>
                
                { comments.map( comments => {
                    return  <Comment 
                                key={comments}  
                                content={comments} 
                                onDeleteComment={deleteComment}
                                // timeComment={timeComment}
                            />
                }
                )}
            
            </div>         
        </article>
    )
}