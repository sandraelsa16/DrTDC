import React, { useState } from 'react';
function DrAppSlot() {
    const generateTimeSlots = (startHour, endHour) => {
        const slots = [];
        for (let hour = startHour; hour < endHour; hour++) {
          for (let min = 0; min < 60; min += 15) {
            const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
            slots.push(time);
          }
        }
        return slots;
      };
    
      const timeSlots = generateTimeSlots(3, 6); // Slots from 3 PM to 6 PM
      const [selectedDate, setSelectedDate] = useState('');
      const [selectedSlot, setSelectedSlot] = useState('');
      const [bookedSlots, setBookedSlots] = useState({}); // { date: [bookedSlots] }
    
      // Handle date change
      const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setSelectedSlot('');
      };
    
      // Handle booking
      const handleBooking = () => {
        if (!selectedDate) return alert('Please select a date');
        if (!selectedSlot) return alert('Please select a slot');
    
        // Check if date already has booked slots
        const bookingsForDate = bookedSlots[selectedDate] || [];
        if (bookingsForDate.includes(selectedSlot)) return alert('Slot already booked');
    
        // Update the booked slots for the selected date
        setBookedSlots({
          ...bookedSlots,
          [selectedDate]: [...bookingsForDate, selectedSlot],
        });
    
        alert(`Appointment booked for ${selectedDate} at ${selectedSlot}`);
        setSelectedSlot('');
      };
    
      return (
        <div className='text-center' style={{ padding: '20px' }}>
          <h3 style={{ margin: "10px auto", color: "darkblue",fontFamily:"sans-serif"}}>Doctor Appointment Booking</h3>
          <div className='d-flex w-50 align-items-center gap-2 mx-auto'>
            <label>Patient name: </label>
             <input type="text" className='form-control w-75 mb-2' placeholder='Enter name' />
          </div>
          <div className='d-flex w-50 align-items-center gap-2 mx-auto'>
            <label>Age: </label>
             <input type="number" className='form-control w-25 mb-2' />
            <label>Phone number: </label>
             <input type="number" className='form-control w-25 mb-2' />
              <input type="radio" name="gender" id="Male" value="Male" />
              <label name="gender">Male</label>
              <input type="radio" name="gender" id="Female" value="Female" />
              <label name="gender">Female</label>
          </div>

          {/* Date Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="appointment-date" style={{ marginRight: '10px' }}>
              Select a date:
            </label>
            <input
              type="date"
              id="appointment-date"
              value={selectedDate}
              onChange={handleDateChange}
              style={{ padding: '5px' }}
            />
          </div>
    
          {/* Time Slot Selection */}
          <p>Select an available time slot:</p>
          <div style={{ display: 'flex',flexWrap:"wrap",  gap: '10px', justifyContent:"center",alignItems:"center", maxWidth:"500px",margin:"20px auto" }}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                disabled={
                  !selectedDate || (bookedSlots[selectedDate] && bookedSlots[selectedDate].includes(slot))
                }
                style={{
                  padding: '10px 15px',
                  cursor:
                    !selectedDate ||
                    (bookedSlots[selectedDate] && bookedSlots[selectedDate].includes(slot))
                      ? 'not-allowed'
                      : 'pointer',
                  backgroundColor:
                    !selectedDate ||
                    (bookedSlots[selectedDate] && bookedSlots[selectedDate].includes(slot))
                      ? '#ccc'
                      : '#4CAF50',
                  color:
                    !selectedDate ||
                    (bookedSlots[selectedDate] && bookedSlots[selectedDate].includes(slot))
                      ? '#777'
                      : '#fff',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                {slot}
              </button>
            ))}
          </div>
    
          {/* Book Appointment Button */}
          <button
            onClick={handleBooking}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Book Appointment
          </button>
    
          {/* Display Selected Slot */}
          {selectedDate && selectedSlot && (
            <p style={{ marginTop: '20px' }}>
              Selected Date: <strong>{selectedDate}</strong>, Time: <strong>{selectedSlot}</strong>
            </p>
          )}
        </div>
      );
    };

export default DrAppSlot
