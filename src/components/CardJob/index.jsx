export function CardJob({ title, company_name, remote ,url}){
    return (
        <div className="content-description-job">
            <p className="title-job">{title}</p>
            <p className='other-info'>{company_name}</p>
            <p className='other-info'>{remote ? 'Sim' : 'Não'}</p>
            <a href={url} className="link-job" target="_blank" rel="noreferrer">Ver vaga</a>
        </div>
    )
}