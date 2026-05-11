'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Star, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

const ModernReviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    review: '',
    platform: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating: rating
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Web3Forms - completely free email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4a69c09d-9ee7-4484-9880-0fa8ab1e7292', // Your verified Web3Forms access key
          name: formData.name,
          email: formData.email,
          rating: formData.rating,
          review: formData.review,
          platform: formData.platform,
          subject: 'New Review Submission',
          from_name: 'Portfolio Review Form',
          to_email: 'mahmoudsruby@gmail.com' // Your email where you want to receive messages
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', rating: 5, review: '', platform: '' });
      } else {
        setSubmitStatus('error');
        console.error('Web3Forms Error:', data.message);
      }
    } catch (error) {
      console.error('Request Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const platforms = [
    'Upwork', 'Fiverr', 'Freelancer', 'Mostaql', 'Nafezly', 'Other'
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Share Your Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have you worked with me on a freelancing platform? Share your honest review and help others make informed decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Submit a Review</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Platform */}
                <div>
                  <label htmlFor="platform" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Platform *
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a platform</option>
                    {platforms.map(platform => (
                      <option key={platform} value={platform}>{platform}</option>
                    ))}
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-slate-600'
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review */}
                <div>
                  <label htmlFor="review" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Review *
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Share your experience working with me..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Review
                    </>
                  )}
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-center gap-3 p-4 rounded-lg ${
                        submitStatus === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                          : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      )}
                      <p className={`text-sm font-medium ${
                        submitStatus === 'success'
                          ? 'text-green-800 dark:text-green-200'
                          : 'text-red-800 dark:text-red-200'
                      }`}>
                        {submitStatus === 'success'
                          ? 'Thank you for your review! It will be reviewed and added to the portfolio.'
                          : 'Failed to submit review. Please try again or contact directly.'
                        }
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Why Share Your Review?
                </h4>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Help other clients make informed decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Contribute to building trust in the freelancing community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Your feedback helps improve service quality</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-100 dark:border-green-800">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Review Guidelines
                </h4>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                  <li>• Be honest and specific about your experience</li>
                  <li>• Mention the platform where we worked together</li>
                  <li>• Focus on communication, quality, and timeliness</li>
                  <li>• Reviews are moderated before being published</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernReviews;