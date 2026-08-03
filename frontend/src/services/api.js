/**
 * Reusable Service Layer for API calls
 * This separates business logic from UI components.
 * Later, this can be connected to Formspree, EmailJS, Supabase, Firebase, or a Node.js API.
 */

export const submitAppointment = async (appointmentData) => {
    try {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        // TODO: Replace with actual API call
        // const response = await fetch('/api/appointments', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(appointmentData)
        // });
        // if (!response.ok) throw new Error('Failed to submit appointment');

        console.log('Appointment submitted:', appointmentData);
        return { success: true, message: 'Appointment request sent successfully!' };
    } catch (error) {
        console.error('Error submitting appointment:', error);
        throw new Error(error.message || 'Something went wrong. Please try again.');
    }
};

export const submitContactForm = async (contactData) => {
    try {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        // TODO: Replace with actual API call
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(contactData)
        // });
        // if (!response.ok) throw new Error('Failed to send message');

        console.log('Contact form submitted:', contactData);
        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw new Error(error.message || 'Something went wrong. Please try again.');
    }
};
