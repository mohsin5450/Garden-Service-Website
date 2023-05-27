import '../styles/globals.css'
import { useRouter } from "next/router";
import Layout from '../components/Layout'
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion'
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
   <Head>
    <title>MH Gardening Services</title>
    <meta name="keywords" content='MH Gardening Services Garden Maintenance  Landscaping Services Lawn Care Garden Renovations'></meta>
   </Head>
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
    <Layout>
      <Component {...pageProps} />
    </Layout>
      </motion.div>
    </AnimatePresence>
    </>
  )
}
