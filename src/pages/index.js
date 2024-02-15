// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import List from '@/pages/qcomps/list_keys_id'
import Recipe from '@/pages/qcomps/recipes'
import State from '@/pages/qcomps/state'
import Form from '@/pages/qcomps/stuckForm'
import ThankYou from '@/pages/qcomps/thankYouCrash'
import ShoppingCart from '@/pages/qcomps/shoppingCart'

export default function Home() {
  return (
    <div className={styles.main}>
        <ShoppingCart />
    </div>
  )
}
