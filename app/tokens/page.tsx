'use client';
import  '../landing.css';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';
import { Body } from '@/components/Body';
import { Search } from '@/components/Search';
import { useState, useEffect } from 'react';
import {getAllTokens, getAllTokensFilters, getAllTokensButtons } from'@/services/getData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEMLABS | Tokens',
  description: 'Test',
}

export default function Tokens(){
    const [tokens, setTokens] = useState<any[]>([]);
    const [filters, setFilters] = useState<any[]>([]);
    const [buttons, setButtons] = useState<any[]>([]);

    useEffect(()=>{
        getAllTokens()
            .then(setTokens);
        getAllTokensFilters()
            .then(setFilters);
        getAllTokensButtons()
            .then(setButtons);
    }, []);

    return(
        <div className="page _container">
        <div className="main">
            <Menu />
            <div className="body">
            <Search />
            <Body title='tokens' selectedStatus='public' data={tokens} filters={filters} buttons={buttons} />
            </div>
        </div>
        <Footer />
        </div>
    )
}