import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useFormik } from 'formik'
import Layout from '@/layouts/layout'
import { useRouter } from 'next/router'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { registerValidate } from '@/lib/validate'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi'

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false })
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push('http://localhost:3000')
      })
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className="mx-auto flex w-3/4 flex-col gap-10">
        <div className="title">
          <h1 className="py-4 text-4xl font-bold text-gray-800">Register</h1>
          {/* <p className="mx-auto w-3/4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p> */}
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            icon={HiOutlineUser}
            {...formik.getFieldProps('username')}
            className={
              formik.errors.username && formik.touched.username
                ? 'border-rose-600'
                : ''
            }
          />

          {/* {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>} */}

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

          {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

          <Input
            name="password"
            icon={HiFingerPrint}
            placeholder="password"
            onClickIcon={() => setShow(!show)}
            type={`${show ? 'text' : 'password'}`}
            {...formik.getFieldProps('password')}
            className={
              formik.errors.password && formik.touched.password
                ? 'border-rose-600'
                : ''
            }
          />
          {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

          <Input
            name="cpassword"
            icon={HiFingerPrint}
            placeholder="Confirm Password"
            onClickIcon={() => setShow(!show)}
            type={`${show ? 'text' : 'password'}`}
            {...formik.getFieldProps('cpassword')}
            className={
              formik.errors.cpassword && formik.touched.cpassword
                ? 'border-rose-600'
                : ''
            }
          />
          {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>} */}

          <Button type="submit" color="primary" className="w-full">
            Sign Up
          </Button>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{' '}
          <Link href={'/login'} className="text-blue-700">
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  )
}
