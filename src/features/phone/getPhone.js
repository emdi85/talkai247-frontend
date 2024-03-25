import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleBuyPhone, handleSearchPhone, selectPhone, status } from './phoneSlice';

function GetPhone() {
  const dispatch = useDispatch();

  const searchResults = useSelector(selectPhone);
  const isLoading = useSelector(status);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [activeTab, setActiveTab] = useState('getPhone');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <select
          className="border border-gray-300 rounded-l-md px-4 py-2 w-full"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="US">United States </option>
          <option value="GB">United Kingdom </option>
          <option value="CA">Canada </option>
          <option value="AU">Australia </option>
          <option value="DE">Germany </option>
          <option value="FR">France </option>
          <option value="ES">Spain </option>
          <option value="IT">Italy </option>
          <option value="NL">Netherlands </option>
          <option value="BR">Brazil </option>
          <option value="JP">Japan </option>
          <option value="MX">Mexico </option>
          <option value="IN">India </option>
          <option value="CN">China </option>
          <option value="RU">Russia </option>
          <option value="AR">Argentina </option>
          <option value="SE">Sweden </option>
          <option value="CH">Switzerland </option>
          <option value="BE">Belgium </option>
        </select>
        <button
          className={`${selectedCountry === "" ? 'bg-gray-400' : 'bg-purple-700'} hover:${selectedCountry === "" ? 'bg-gray-600' : 'bg-purple-600'} text-white py-2 px-4 rounded-r-md ml-1`}
          onClick={() => { dispatch(handleSearchPhone({ selectedCountry })) }}
          disabled={isLoading || selectedCountry === ""}
        >
          {isLoading ? 'Loading...' : 'Search'}
        </button>

      </div>

      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Friendly Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Capabilities<br />
                <code>voice, SMS, MMS</code>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Monthly fee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Buy Now
              </th>
            </tr>
          </thead>

          {isLoading ? (
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td colSpan="5" className="py-12 text-center">
                  <div className="flex justify-center">
                    <svg className="animate-spin h-12 w-12 text-purple-700" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.036 0-3.89-.757-5.291-2.009zM12 20c4.418 0 8-3.582 8-8h-4c0 2.036-.757 3.89-2.009 5.291A7.962 7.962 0 0112 20zm5.291-2.009A7.962 7.962 0 0112 20v4c4.418 0 8-3.582 8-8h-4c0 2.036-.757 3.89-2.009 5.291z"></path>
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(searchResults) && searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{result.phoneNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{result.friendlyName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <td>  {result.capabilities.voice ? (
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      )}
                      </td>
                      <td>  {result.capabilities.SMS ? (
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      )}
                      </td>
                      <td>  {result.capabilities.MMS ? (
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      )}
                      </td>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">1.15$</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button onClick={() => { dispatch(handleBuyPhone({ result })) }}>
                        <svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokelinejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                      </button>
                    </td>
                  </tr>
                ))) : (
                <tr>
                  <td colSpan="5" className="py-12 text-center">
                    <div className="flex justify-center">
                      Not find available phone number
                    </div>
                  </td>
                </tr>
              )}
            </tbody>)
          }
        </table>
      </div>
    </div>
  );
}

export default GetPhone;
