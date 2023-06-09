import './contactus.css'

export default function Contact() {
	return (
		<div className="overall-div">
			<div>
				<div className="getintouch">
					<h1>Get in touch! </h1>
					<p>Contact us to make your enquiry today!</p>
				</div>

				<div className="info-flex-row">
					<div className="info-flex">
						<button className="x-button">
							<img src="images/location.png" alt="location icon" />
							<p>25 Taiwo Close.</p>
						</button>
					</div>

					<div className="info-flex">
						<button className="x-button">
							<img src="images/phone.png" alt="phone icon" />
							<p>+234 9165 276094</p>
						</button>
					</div>

					<div className="info-flex">
						<button className="x-button">
							<img src="images/mail.png" alt="mai" />
							<p>hello@kingsmeal.com</p>
						</button>
					</div>
				</div>

				<form>
					<p className="title">Contact Form</p>
					<div className="form-divider">
						<div className="flex-left">
							<div>
								<label htmlFor="name">Your Name</label>
								<input type="text" className='p-2'  placeholder="Enter your name" id="name"></input>
							</div>
							<div>
								<label htmlFor="name">Mail</label>
								<input type="mail" className='p-2' placeholder="Email" id="email"></input>
							</div>
							<div>
								<label htmlFor="name">Phone</label>
								<input type="text" className='p-2' placeholder="Phone Number" id="phone-number"></input>
							</div>
						</div>

						<p className="flex-right">
							<label htmlFor="enquiry">Message</label>
							<textarea id="enquiry" name="enquiry"></textarea>
						</p>
					</div>

					<p className="title">Services</p>

					<div className="flex-buttons">
						<div>
							<button className="pill-button tag">Reservation</button>
						</div>
						<div>
							<button className="pill-button tag">Delivery</button>
						</div>
						<div>
							<button className="pill-button tag">Collection</button>
						</div>
					</div>

					<button className="pill-button">Send Message</button>
				</form>
			</div>
		</div>
	)
}
