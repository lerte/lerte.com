import qiniu from 'qiniu'

export default async (req, res) => {
  const { Bucket, AccessKey, SecretKey } = process.env

  const mac = new qiniu.auth.digest.Mac(AccessKey, SecretKey)

  const putPolicy = new qiniu.rs.PutPolicy({
    scope: Bucket
  })

  const uploadToken = putPolicy.uploadToken(mac)

  res.json({ uploadToken })
}
