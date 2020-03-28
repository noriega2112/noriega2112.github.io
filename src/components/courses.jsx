import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

export default () => {

    const data = useStaticQuery(graphql`
    {
        dataJson {
          data {
            courses {
              url
              title
            }
          }
        }
      }`);
    console.log(data)

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="sm:text-3xl text-2xl font-bold text-center">Mis certificados online</h2>
                    <div className="flex-1 ml-2 sm:flex mx-auto mt-8 overflow-x-auto">
                        {
                            data.dataJson.data.courses.map(certificate =>(
                                <div className="shadow border p-8 bg-white mt-2 mr-4 rounded">
                                    <h4 className="font-bold">{certificate.title}</h4>
                                    <div className="text-white">
                                        <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="inline-block btn p-2 mt-2 ">Ver</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};