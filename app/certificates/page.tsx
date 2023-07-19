'use client';
import  '../landing.css';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';
import { Body } from '@/components/Body';
import { Search } from '@/components/Search';
import {useState, useEffect} from 'react';
import {getAllCertificates, getAllCertificatesFilters, getAllCertificatesButtons } from'@/services/getData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DEMLABS | Tokens',
    description: 'Test',
}

export default function Certificates(){
    const [certificates, setCertificates] = useState<any[]>([]);
    const [filters, setFilters] = useState<any[]>([]);
    const [buttons, setButtons] = useState<any[]>([]);

    useEffect(()=>{
        getAllCertificates()
            .then(setCertificates);
        getAllCertificatesFilters()
            .then(setFilters);
        getAllCertificatesButtons()
            .then(setButtons);
    }, []);

    return(
        <div className="page _container">
        <div className="main">
            <Menu />
            <div className="body">
            <Search />
            <Body title='certificates' selectedStatus='public' data={certificates} filters={filters} buttons={buttons} />
            </div>
        </div>
        <Footer />
        </div>
    )
}