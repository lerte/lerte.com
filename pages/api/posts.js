import clientPromise from '@/lib/mongodb'

const getPosts = async (req, res) => {
  const pageSize = parseInt(req.query.pageSize) || 10
  try {
    const client = await clientPromise
    const db = client.db('blog')
    const posts = await db
      .collection('posts')
      .find({})
      .sort({ published: -1 })
      .limit(pageSize)
      .toArray()
    res.json(posts)
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    })
  }
}

const addPost = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('blog')
    const { title, content } = req.body

    const post = await db.collection('posts').insertOne({
      title,
      content
    })

    res.json(post)
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    })
  }
}

const updatePost = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('blog')
    const { _id } = req.body

    await db.collection('posts').updateOne(
      {
        _id
      },
      { $set: { published: true } }
    )

    res.json({
      message: 'Post updated successfully',
      success: true
    })
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    })
  }
}

const deletePost = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('blog')
    const { _id } = req.body

    await db.collection('posts').deleteOne({
      _id
    })

    res.json({
      message: 'Post deleted successfully',
      success: true
    })
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    })
  }
}

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      return getPosts(req, res)
    }
    case 'POST': {
      return addPost(req, res)
    }
    case 'PUT': {
      return updatePost(req, res)
    }
    case 'DELETE': {
      return deletePost(req, res)
    }
  }
}
