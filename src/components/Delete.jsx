import React from 'react'

const Delete = ({
	setModalIsOpen,
	title,
	setTitle,
	body,
	setBody,
	createPost,
}) => {
	return (
		<div className='fixed flex items-center justify-center bg-[rgba(0,0,0,.7)] top-0 left-0 w-full h-screen z-[9999999]'>
			<form
				onSubmit={createPost}
				className='bg-white flex flex-col p-6 rounded-md shadow-md w-[400px] min-h-[500px] gap-y-6'
			>
				<input
					className='px-4 py-4 border border-indigo-400 border-1 rounded-md'
					type='text'
					placeholder='Enter title'
					onChange={e => setTitle(e.target.value)}
					value={title}
				/>

				<textarea
					placeholder='Enter description'
					className='px-4 py-4 border border-indigo-400 border-1 rounded-md'
					onChange={e => setBody(e.target.value)}
					value={body}
				></textarea>

				<button className='py-2 px-4 rounded-md bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition duration-200'>
					Delete
				</button>
			</form>
		</div>
	)
}

export default Delete
