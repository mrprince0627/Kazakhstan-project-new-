import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const CampusPhotos = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      url: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
      title: 'Modern Laboratory',
      description: 'State-of-the-art medical laboratory with latest equipment'
    },
    {
      url: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg',
      title: 'Research Facility',
      description: 'Advanced research center for medical studies'
    },
    {
      url: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
      title: 'Lecture Hall',
      description: 'Spacious lecture halls with modern audio-visual systems'
    },
    {
      url: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg',
      title: 'Medical Library',
      description: 'Extensive medical library with digital resources'
    },
    {
      url: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      title: 'Campus Building',
      description: 'Main academic building with modern architecture'
    },
    {
      url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
      title: 'Student Hostel',
      description: 'Comfortable student accommodation facilities'
    },
    {
      url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      title: 'Cafeteria',
      description: 'Modern dining facility serving international cuisine'
    },
    {
      url: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg',
      title: 'Clinical Training',
      description: 'Hands-on clinical training in hospital settings'
    },
    {
      url: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
      title: 'Anatomy Lab',
      description: 'Well-equipped anatomy laboratory for practical learning'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Campus Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern campus facilities and see where you'll be 
            studying for the next six years of your medical education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
                  <p className="text-sm text-gray-200">{photo.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Campus at a Glance</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">50+</h4>
              <p className="text-blue-100">Acres Campus</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">25+</h4>
              <p className="text-blue-100">Modern Labs</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">15+</h4>
              <p className="text-blue-100">Lecture Halls</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">8</h4>
              <p className="text-blue-100">Hostel Buildings</p>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img 
                src={photos[selectedImage].url}
                alt={photos[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">{photos[selectedImage].title}</h3>
                <p className="text-gray-200">{photos[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CampusPhotos;