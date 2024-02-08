// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
// import Gallery from "@/pages/components/gallery";
import Profile from "@/pages/qcomps/profile_mistake";
import MyComp from "@/pages/qcomps/firstcomp";
import Bio from "@/pages/qcomps/bios";
import TodoList from "@/pages/qcomps/todos";
import Gallery from "@/pages/qcomps/gallery_props"
import Item from "@/pages/qcomps/props_item"
import List from "@/pages/qcomps/list_keys_id"
import RecipeList from "@/pages/qcomps/recipes";

export default function Home() {
  return (
    <div className={styles.main}>
        < RecipeList />
    </div>
  )
}
