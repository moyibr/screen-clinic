import React from 'react';
import { Stethoscope, Sparkles, Shield, Syringe, Activity, Heart } from 'lucide-react';
import {
    serviceCheckup,
    serviceCleaning,
    serviceWhitening,
    serviceImplants,
    serviceOrthodontics,
    serviceRootCanal
} from '../config/siteImages';

export const services = [
    {
        id: 'general-checkup',
        title: 'General Checkup',
        shortDescription: 'Comprehensive dental examination and consultation.',
        fullDescription: 'Our general checkup includes a thorough examination of your teeth, gums, and mouth. We use advanced diagnostic tools to detect any issues early and provide a personalized treatment plan.',
        icon: <Stethoscope />,
        image: serviceCheckup,
        features: ['Digital X-Rays', 'Oral Cancer Screening', 'Personalized Treatment Plan']
    },
    {
        id: 'teeth-cleaning',
        title: 'Teeth Cleaning',
        shortDescription: 'Professional scaling and polishing for a brighter smile.',
        fullDescription: 'Professional teeth cleaning removes plaque and tartar buildup that regular brushing cannot. It helps prevent cavities, gingivitis, and periodontal disease while leaving your teeth feeling fresh and clean.',
        icon: <Sparkles />,
        image: serviceCleaning,
        features: ['Plaque & Tartar Removal', 'Stain Removal', 'Fluoride Treatment']
    },
    {
        id: 'teeth-whitening',
        title: 'Teeth Whitening',
        shortDescription: 'Advanced whitening treatments for a radiant smile.',
        fullDescription: 'Achieve a noticeably brighter smile with our professional teeth whitening services. We offer both in-office laser whitening and custom take-home kits to suit your lifestyle and preferences.',
        icon: <Shield />,
        image: serviceWhitening,
        features: ['Instant Results', 'Safe for Enamel', 'Long-lasting Brightness']
    },
    {
        id: 'dental-implants',
        title: 'Dental Implants',
        shortDescription: 'Permanent solution for missing teeth.',
        fullDescription: 'Dental implants are the most natural-looking and durable solution for replacing missing teeth. They restore full chewing function and prevent bone loss in the jaw.',
        icon: <Syringe />,
        image: serviceImplants,
        features: ['Titanium Implants', 'Natural Look & Feel', 'Lifetime Durability']
    },
    {
        id: 'orthodontics',
        title: 'Orthodontics',
        shortDescription: 'Braces and clear aligners for perfect alignment.',
        fullDescription: 'Straighten your teeth and correct bite issues with our orthodontic treatments. We offer traditional metal braces, ceramic braces, and invisible aligners like Invisalign.',
        icon: <Activity />,
        image: serviceOrthodontics,
        features: ['Invisible Aligners', 'Ceramic Braces', 'Customized Treatment Plans']
    },
    {
        id: 'root-canal',
        title: 'Root Canal',
        shortDescription: 'Painless treatment to save infected teeth.',
        fullDescription: 'Save your natural tooth with our painless root canal therapy. We use advanced rotary endodontics and local anesthesia to ensure a comfortable and efficient procedure.',
        icon: <Heart />,
        image: serviceRootCanal,
        features: ['Painless Procedure', 'Saves Natural Tooth', 'Prevents Further Infection']
    }
];
