import React from 'react';
import styles from './styles.module.scss';

function Article(props){
    return(
        <div>
        <h1 className={styles.h1}>{props.id}</h1>
        <div className={styles.name}>Name:</div>
        <div className={styles.item}>{props.title}</div>
        <div className={styles.body}>{props.body}</div>
        </div>
    )
}


Article.defaultProps = {id:'loading...',body:'loading...', title:'loading...'}

export default Article;