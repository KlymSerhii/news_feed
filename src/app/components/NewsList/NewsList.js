import React, {useState, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NewsItem from "../NewsItem"
import Dialog from "../Dialog";
import {selectNews, deleteNews} from "../../slices/newsSlice";
import {selectUserStatus} from "../../slices/userSlice";

const generateDeleteNewsDialogData = (id) => ({
    title: "You are going to delete important news",
    text: `News id is ${id}. Are you sure?`,
    agreeText: "Yes",
    disagreeText: "No"
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        flexFlow: "column wrap",
        marginTop: theme.spacing(2)
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const NewsList = () => {
    const classes = useStyles();
    const [newsToDeleteData, setNewsToDeleteData] = useState(null);
    const news = useSelector(selectNews);
    const isUserLoggedIn = useSelector(selectUserStatus);
    const dispatch = useDispatch();
    const onDeleteNewsItem = (id) => () => setNewsToDeleteData({id, ...generateDeleteNewsDialogData(id)});
    const onAgreeDeleteNewsItem = () => {
        dispatch(deleteNews(newsToDeleteData.id));
        setNewsToDeleteData(null)
    };
    const onDisagreeDeleteNewsItem = () => setNewsToDeleteData(null);

    const newsItems = news.map(({id, title, text}) => (
        <NewsItem key={id} title={title} text={text} onDelete={onDeleteNewsItem(id)} isUserLoggedIn={isUserLoggedIn}/>));
    const dialogActions = useMemo(() => (<>
        <Button onClick={onDisagreeDeleteNewsItem} color="primary">
            Disagree
        </Button>
        <Button onClick={onAgreeDeleteNewsItem} color="primary" autoFocus>
            Agree
        </Button>
    </>), [onAgreeDeleteNewsItem, onDisagreeDeleteNewsItem]);

    return (
        <div className={classes.root}>
            {newsItems}
            {
                newsToDeleteData !== null &&
                <Dialog text={newsToDeleteData.text} title={newsToDeleteData.title} actions={dialogActions}/>
            }
        </div>
    );
};

export default NewsList
