'use strict';
 
const e = React.createElement;
 
class LikeButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {liked:false};
	}
 
	render(){
		if(this.state.liked){
			return 'Вам понравился комментарий номер ' + this.props.commentID;
		}
 
		return e(
			'button',
			{onClick:() => this.setState({liked:true}) },
			'Кнопка'
		);
	}
}
document.querySelectorAll('.like_button_container').forEach(domContainer=> {
		const commentID = parseInt(domContainer.dataset.commentid, 10);
		ReactDOM.render(e(LikeButton, {commentID: commentID}),domContainer);
	});