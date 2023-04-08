import { Link } from 'react-router-dom'
import './StoreContent.scss'

const Content = props => {
	const { as: Tag = 'h2', bg, reverse, highlight, text, title, link, btnText, image, children } = props
	return (
		<div className="content" data-bg={bg || null}>

			<div className="content-container-order" data-reverse={reverse ? '' : null}>


				

				


				<div className="content-text">
					<Tag className="text-heading" data-highlight={highlight ? '' : null}>
						{title}
					</Tag>
					<p className="text-p">{text}</p>
					<div className="btn-container">
						<Link to={link} className="btn">
							{btnText}
						</Link>
					</div>
					{children}
				</div>


				<div className="content-img-order">
					<img src={`images/${image}`} alt="hero" className="hero-img" />
				</div>
				
			</div>
		</div>
	)
}

export default Content
