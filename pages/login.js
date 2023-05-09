import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useFormik } from 'formik'
import Layout from '@/layouts/layout'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import login_validate from '@/lib/validate'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi'

export default function Login() {
  const [show, setShow] = useState(false)
  const router = useRouter()
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: login_validate,
    onSubmit
  })

  /**
   * haleykennedy@gmail.com
   * admin123
   */

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    })

    if (status.ok) router.push(status.url)
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: 'http://localhost:3000' })
  }

  // Github Login
  async function handleGithubSignin() {
    signIn('github', { callbackUrl: 'http://localhost:3000' })
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="mx-auto flex w-3/4 flex-col gap-10">
        <div className="title">
          <h1 className="py-4 text-4xl font-bold text-gray-800">Login</h1>
          {/* <p className="mx-auto w-3/4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p> */}
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}
          {/* login buttons */}
          <Input
            type="email"
            placeholder="Email"
            icon={HiAtSymbol}
            {...formik.getFieldProps('email')}
            className={
              formik.errors.email && formik.touched.email
                ? 'border-rose-600'
                : ''
            }
          />
          <Input
            name="password"
            icon={HiFingerPrint}
            placeholder="password"
            onClickIcon={() => setShow(!show)}
            type={`${show ? 'text' : 'password'}`}
            {...formik.getFieldProps('password')}
          />
          <Button type="submit" color="primary" className="w-full">
            Login
          </Button>
          {/* <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className={styles.button_custom}
            >
              Sign In with Google
              <Image src={'/assets/google.svg'} width="20" height={20}></Image>
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGithubSignin}
              className={styles.button_custom}
            >
              Sign In with Github
              <Image src={'/assets/github.svg'} width={25} height={25}></Image>
            </button>
          </div> */}
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          don't have an account yet?{' '}
          <Link href={'/register'} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  )
}
