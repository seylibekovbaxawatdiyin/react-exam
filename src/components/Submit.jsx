import React, { useEffect } from 'react'
const Submit = () => {
	const [posts, setPosts] = useState([])

	const [title, setTitle] = useState('')

	const [modalIsOpen, setModalIsOpen] = useState(false)

	useEffect(() => {
		setLoading(true)
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				setPosts(res.data)
			})
			.finally(() => setLoading(false))
	}, [])

	function createPost(e) {
		e.preventDefault()

		const data = {
			title: title,
			body: body,
			userId: '1',
		}

		if (title) {
			axios
				.post('https://jsonplaceholder.typicode.com/posts', data)
				.then(res => {
					console.log('success', res)
					setPosts([res.data, ...posts])
					setModalIsOpen(false)
				})
				.catch(err => {
					console.log(err)
				})
				.finally(() => {
					setTitle('')
					setBody('')
				})
		}
	}

	return <div>Submit</div>
}
export default Submit
