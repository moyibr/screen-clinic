import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { X, CheckCircle2 } from 'lucide-react';
import { submitAppointment } from '../../services/api';

const schema = yup.object({
    name: yup.string().required('Name is required'),
    phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    date: yup.date().required('Date is required').min(new Date(), 'Date cannot be in the past'),
    time: yup.string().required('Time is required'),
    service: yup.string().required('Please select a service'),
    message: yup.string()
}).required();

const AppointmentModal = ({ isOpen, onClose }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setSubmitError('');
        setSuccessMessage('');
        try {
            const response = await submitAppointment(data);
            setSuccessMessage(response.message);
            reset();
            setTimeout(() => {
                setSuccessMessage('');
                onClose();
            }, 3000);
        } catch (error) {
            setSubmitError(error.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 relative">
                <div className="bg-primary p-6 text-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Book Appointment</h2>
                    <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                
                {successMessage ? (
                    <div className="p-10 text-center flex flex-col items-center justify-center h-[400px]">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
                        <p className="text-gray-600">{successMessage}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                        {submitError && (
                            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4">
                                {submitError}
                            </div>
                        )}
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input 
                                {...register('name')} 
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input 
                                    {...register('phone')} 
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="9876543210"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    {...register('email')} 
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                <input 
                                    type="date"
                                    {...register('date')} 
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                                <input 
                                    type="time"
                                    {...register('time')} 
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                            <select 
                                {...register('service')} 
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
                            >
                                <option value="">Select Treatment...</option>
                                <option value="consultation">General Consultation</option>
                                <option value="implants">Dental Implants</option>
                                <option value="root-canal">Root Canal</option>
                                <option value="orthodontics">Orthodontics (Braces)</option>
                                <option value="whitening">Teeth Whitening</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                            <textarea 
                                {...register('message')} 
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Any specific concerns?"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            ) : (
                                "Confirm Booking"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AppointmentModal;
