import React from 'react'
import '../scss/Card.scss'
import img1 from '../assets/cardimages/1.png'
import img2 from '../assets/cardimages/2.png'
import img3 from '../assets/cardimages/3.png'
import img4 from '../assets/cardimages/4.png'
import img5 from '../assets/cardimages/5.png'
import img6 from '../assets/cardimages/6.png'
type propType ={
    title:string,
    description:string,
    img:string,
    svglogo:any,
    mainText:string,
    unitText:string    
}
export const Card:React.FC<propType> = ({title,description,img,svglogo,mainText,unitText}) => {
    return (
        <div>
            <img src={img} className='card-image' />
            <h1 className='card-title'>{title}</h1>
            <p className='card-description'>{description}</p>
            <div className='card-pill'>
                {svglogo}
                <div className='card-pill-textcontainer'>

                <p className='card-pill-main'>{mainText}</p>
                <p className='card-pill-unit'>{unitText}</p>
            </div>
                </div>
        </div>
    )
}

export const NutritionCard = ()=>{
    return(
        <Card
        title='Nutrition'
        description='Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.'
        img={img1}
        svglogo={<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6.78285C24 14.4409 12.8796 20.6396 12.4061 20.8956C12.2813 20.9641 12.1417 21 12 21C11.8583 21 11.7187 20.9641 11.5939 20.8956C11.235 20.6986 4.785 17.1004 1.66393 12.0461C1.62367 11.9799 1.60145 11.9039 1.59958 11.826C1.59771 11.7481 1.61624 11.6711 1.65327 11.603C1.6903 11.5348 1.74447 11.478 1.8102 11.4384C1.87593 11.3988 1.95082 11.3778 2.02714 11.3777H6C6.14115 11.3778 6.28014 11.3423 6.40462 11.2743C6.52911 11.2064 6.63523 11.1081 6.71357 10.9882L7.71429 9.4566L10.4293 13.6138C10.5333 13.7731 10.6856 13.8932 10.8629 13.9557C11.0402 14.0181 11.2326 14.0195 11.4107 13.9595C11.5996 13.8942 11.7613 13.7654 11.8693 13.5941L13.3157 11.3777H15.4286C15.5461 11.3779 15.6624 11.3535 15.7703 11.306C15.8781 11.2584 15.9753 11.1887 16.0557 11.1012C16.136 11.0137 16.1979 10.9102 16.2375 10.7973C16.2771 10.6843 16.2935 10.5642 16.2857 10.4445C16.2665 10.2195 16.1648 10.0103 16.0008 9.85873C15.8369 9.70717 15.6229 9.62449 15.4018 9.62727H12.8571C12.716 9.62718 12.577 9.66268 12.4525 9.73062C12.328 9.79856 12.2219 9.89684 12.1436 10.0167L11.1429 11.5483L8.42786 7.39112C8.32377 7.23158 8.17126 7.11135 7.99377 7.04889C7.81627 6.98644 7.6236 6.98522 7.44536 7.04541C7.2569 7.11111 7.09569 7.23987 6.98786 7.41081L5.54143 9.62727H0.806786C0.715192 9.62753 0.625926 9.59782 0.552076 9.54249C0.478226 9.48717 0.423678 9.40914 0.396429 9.31985C0.137911 8.49988 0.00421077 7.64425 0 6.78285C0.00198508 4.98455 0.702493 3.26048 1.94784 1.98889C3.19319 0.717297 4.88167 0.00202691 6.64286 0C8.85536 0 10.7925 0.971479 12 2.61358C13.2075 0.971479 15.1446 0 17.3571 0C19.1183 0.00202691 20.8068 0.717297 22.0522 1.98889C23.2975 3.26048 23.998 4.98455 24 6.78285Z" fill="url(#paint0_linear_2_505)" />
            <defs>
                <linearGradient id="paint0_linear_2_505" x1="-2.52527e-07" y1="17.3793" x2="26.6728" y2="-3.43435" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4683D0" />
                    <stop offset="1" stop-color="#7CD0A2" />
                </linearGradient>
            </defs>
        </svg>}
        mainText='121/80'
        unitText='mm/Hg'

        />
    )
}
export const PhysicalActivityCard = ()=>{
    return(
        <Card
        title='Physical activity'
        description='Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.'
        img={img2}
        svglogo={<svg width="23" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 23L10.6875 21.3455C4.25 15.4921 0 11.6191 0 6.89373C0 3.02071 3.025 0 6.875 0C9.05 0 11.1375 1.01526 12.5 2.60708C13.8625 1.01526 15.95 0 18.125 0C21.975 0 25 3.02071 25 6.89373C25 11.6191 20.75 15.4921 14.3125 21.3455L12.5 23Z" fill="url(#paint0_linear_2_522)"/>
            <defs>
            <linearGradient id="paint0_linear_2_522" x1="6.67858e-07" y1="22" x2="22" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F0C374"/>
            <stop offset="1" stop-color="#E66969"/>
            </linearGradient>
            </defs>
            </svg>
            }
        mainText='32'
        unitText='minutes'

        />
    )
}
export const RestorativeSleepCard = ()=>{
    return(
        <Card
        title='Restorative sleep'
        description='Consistent, quality sleep is essential for cognitive function and physical health.'
        img={img3}
        svglogo={<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2_570" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
<path d="M7.97897 2C7.66232 2.9832 7.50153 4.00992 7.50246 5.04286C7.50246 10.5129 11.9369 14.9473 17.4069 14.9473C18.7569 14.9489 20.0929 14.6736 21.3323 14.1384C20.0486 18.1206 16.313 21 11.9044 21C6.43443 21 2 16.5656 2 11.0956C2 7.0199 4.46125 3.51978 7.97897 2Z" fill="white" stroke="white" stroke-width="2.20098" stroke-linejoin="round"/>
<path d="M16.119 3.39258H21.2583L15.7559 7.79455H21.2583" stroke="white" stroke-width="2.20098" stroke-linecap="round" stroke-linejoin="round"/>
</mask>
<g mask="url(#mask0_2_570)">
<path d="M-1.30176 -2.11035H25.1101V24.3015H-1.30176V-2.11035Z" fill="url(#paint0_linear_2_570)"/>
</g>
<defs>
<linearGradient id="paint0_linear_2_570" x1="11.9041" y1="-2.11035" x2="6" y2="31" gradientUnits="userSpaceOnUse">
<stop stop-color="#84DA9B"/>
<stop offset="1" stop-color="#ECCC68"/>
</linearGradient>
</defs>
</svg>

            }
        mainText='8'
        unitText='hours'

        />
    )
}
export const StressManagementCard = ()=>{
    return(
        <Card
        title='Stress management'
        description='Effective stress management techniques are crucial for mental well-being and overall health.'
        img={img4}
        svglogo={<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 23L10.6875 21.3455C4.25 15.4921 0 11.6191 0 6.89373C0 3.02071 3.025 0 6.875 0C9.05 0 11.1375 1.01526 12.5 2.60708C13.8625 1.01526 15.95 0 18.125 0C21.975 0 25 3.02071 25 6.89373C25 11.6191 20.75 15.4921 14.3125 21.3455L12.5 23Z" fill="url(#paint0_linear_2_540)"/>
            <defs>
            <linearGradient id="paint0_linear_2_540" x1="-2.63049e-07" y1="19.0345" x2="28.8253" y2="-2.35862" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4683D0"/>
            <stop offset="1" stop-color="#7CD0A2"/>
            </linearGradient>
            </defs>
            </svg>            
            }
        mainText='60'
        unitText='bpm'

        />
    )
}
export const SocialConnectionCard = ()=>{
    return(
        <Card
        title='Social connection'
        description='Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.'
        img={img5}
        svglogo={<svg width="23" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 23L10.6875 21.3455C4.25 15.4921 0 11.6191 0 6.89373C0 3.02071 3.025 0 6.875 0C9.05 0 11.1375 1.01526 12.5 2.60708C13.8625 1.01526 15.95 0 18.125 0C21.975 0 25 3.02071 25 6.89373C25 11.6191 20.75 15.4921 14.3125 21.3455L12.5 23Z" fill="url(#paint0_linear_2_522)"/>
            <defs>
            <linearGradient id="paint0_linear_2_522" x1="6.67858e-07" y1="22" x2="22" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F0C374"/>
            <stop offset="1" stop-color="#E66969"/>
            </linearGradient>
            </defs>
            </svg>           
            }
        mainText='Feeling'
        unitText='better'

        />
    )
}
export const SubstanceAbuseCard = ()=>{
    return(
        <Card
        title='Substance abuse'
        description='Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.'
        img={img6}
        svglogo={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9.00006 10.2652 9.10545 10.5195 9.293 10.707L12.293 13.707C12.4816 13.8892 12.7342 13.99 12.9964 13.9877C13.2586 13.9854 13.5094 13.8802 13.6948 13.6948C13.8802 13.5094 13.9854 13.2586 13.9877 12.9964C13.99 12.7342 13.8892 12.4816 13.707 12.293L11 9.586V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4Z" fill="url(#paint0_linear_2_576)"/>
            <defs>
            <linearGradient id="paint0_linear_2_576" x1="10" y1="4.5" x2="-8.5" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#84DA9B"/>
            <stop offset="1" stop-color="#ECCC68"/>
            </linearGradient>
            </defs>
            </svg>
            }
        mainText='62'
        unitText='days'

        />
    )
}

// export default Card, NutritionCard;